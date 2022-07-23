# Contributing

First of all, thank you for taking the time to contribute! 😄

Feel free to submit a pull request to add cafés you've been to. Please, obtain the internet speed (download speed and speedtest link) and the coordinates (latitude and longitude) of the café and then add them to the corresponding [geoJSON](http://geojson.org/geojson-spec.html) file. If your city doesn't exist in the repo, create a new geoJSON file. For the format, see [istanbul.geojson](istanbul.geojson).

- **Internet Speed:** Please use [Speedtest](https://www.speedtest.net) to test the speed and performance of the internet connection.
- **Schema:**
    - **Properties:**  The "Name", "Download Speed" and "Speedtest Link" members are *required*. In addition to these, you can add any members you want (such as "Comment", "Menu", etc.).
    - **Geometry:** The "coordinates" and "type" members are *required*. The "coordinates" member should be an array of the coordinates (longitude and latitude). The value of the "type" member must be "Point".

    Example of a GeoJSON feature schema:
    ```json
    {
        "type": "Feature",
        "properties": {
            "Name": "<NAME_OF_THE_CAFE>",
            "Download Speed": "<DOWNLOAD_SPEED> Mbps",
            "Speedtest Link": "<SPEEDTEST_RESULT_LINK>"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.3456789,
                98.7654321
            ]
        }
    }
    ```
