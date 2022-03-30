export interface ILoginParams {
  username: string | null;
  password: string | null;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}
