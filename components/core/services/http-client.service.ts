import axios, {
  AxiosInstance,
  AxiosHeaders,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

export enum AuthType {
  BasicAuthentication = "BasicAuthentication",
  SecurityAuthentication = "SecurityAuthentication",
}

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const headers = config.headers
          ? new AxiosHeaders(config.headers)
          : new AxiosHeaders();

        const authType = headers.get("X-Auth-Type") as AuthType | undefined;

        headers.delete("X-Auth-Type");

        if (authType === AuthType.SecurityAuthentication) {
            // Aquí irá el token hardcodeado mientras no usamos stores
           const token = "TU_TOKEN_AQUI"; 
          if (token) {
            headers.set("Authorization", `Bearer ${token}`);
          } else {
            headers.delete("Authorization");
          }
        }

        config.headers = headers;
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => Promise.reject(error)
    );
  }

  get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_BASE_URL || "");
export default httpClient;
