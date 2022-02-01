import { HttpService } from "./http-service";

interface LocationResponseDTO {
  ip: string;
  countrycode: string;
  countryname: string;
}

interface LocationResponse {
  ip: string;
  countrycode: string;
  countryname: string;
}

const GET_COUNTRY_SERVICE_URL = "https://iplist.cc/api";

export class CountryLocationService {
  private http = HttpService;

  async getClientCountryLocation(): Promise<LocationResponse> {
    const url = `${GET_COUNTRY_SERVICE_URL}`;
    const response = await this.http.get<LocationResponseDTO>(url);

    return {
      ip: response.data.ip,
      countrycode: response.data.countrycode.toLowerCase(),
      countryname: response.data.countryname,
    };
  }

  async getCountryLocationByIP(ip: string): Promise<LocationResponse> {
    const url = `${GET_COUNTRY_SERVICE_URL}/${ip}`;
    const response = await this.http.get<LocationResponseDTO>(url);

    return {
      ip: response.data.ip,
      countrycode: response.data.countrycode.toLowerCase(),
      countryname: response.data.countryname,
    };
  }
}
