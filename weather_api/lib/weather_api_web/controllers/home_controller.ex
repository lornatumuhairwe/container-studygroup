defmodule WeatherApiWeb.HomeController do
  use WeatherApiWeb, :controller

  def index(conn, %{"q" => city}) do
    data = fetch_weather_data(city)
    
    json conn, data
  end

  def index(conn, _) do
    data = fetch_weather_data("Kampala")

    json conn, data
  end

  def fetch_weather_data(city) do
    %HTTPoison.Response{body: data} = HTTPoison.get!("http://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=#{api_key()}")
    Jason.decode!(data)
  end

  defp api_key do
    System.get_env("OPEN_WEATHER_API_KEY")
  end
end
