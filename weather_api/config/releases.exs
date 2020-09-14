import Config

secret_key_base = System.get_env("SECRET_KEY_BASE") ||
  raise """
  environament variable SECRET_KEY_BASE is missing.
  You can generate one by calling: mix phx.gen.secret
  """

config :weather_api, WeatherApiWeb.Endpoint,
  http: [:inet6, port: 4000], 
  secret_key_base: secret_key_base
