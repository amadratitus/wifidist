# WiFi Distance Estimator

A web-based tool that estimates the distance between you and a WiFi access point using signal frequency and RSSI (Received Signal Strength Indicator) values.

![WiFi Distance Estimator](wifidist.png)

## Features

- Calculate distance based on WiFi signal parameters
- Support for both 2.4 GHz and 5 GHz WiFi bands
- Real-time input validation
- Responsive design that works on all devices
- Clean and modern user interface
- Instant results with detailed visualization

## How It Works

The tool uses the following formula to estimate distance:

```
distance = 10 ^ ((27.55 - (20 * log10(frequency)) + |RSSI|) / 20.0)
```

Where:
- `frequency` is in MHz (2400-6000 MHz)
- `RSSI` is in dBm (-100 to 0 dBm)
- resulting `distance` is in meters

## Usage

1. Enter the WiFi frequency in MHz
   - For 2.4 GHz networks: typically 2400-2500 MHz
   - For 5 GHz networks: typically 5000-5900 MHz

2. Enter the RSSI value in dBm
   - Typical range: -30 dBm (very strong) to -90 dBm (very weak)
   - You can find this value in your device's WiFi settings or using a network analyzer app

3. Click "Calculate Distance" to see the results

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Formula based on the Free Space Path Loss (FSPL) calculation
- UI design inspired by modern web applications
- Icons provided by Bootstrap Icons

## Author

Eiroc Systems- eirocsystems.com

## Support

For support, please open an issue in the GitHub repository or contact us through the website.