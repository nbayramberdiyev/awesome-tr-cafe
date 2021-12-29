# Contributing

First of all, thank you for taking the time to contribute! 😄

Feel free to submit a pull request to add cafés you've been to. Please, obtain the internet speed (download speed and speedtest link) and coordinates (latitude and longitude) of the café and then add them to the corresponding [geoJSON](http://geojson.org/geojson-spec.html) file. If your city doesn't exist in the repo, create a new geoJSON file. For the format, see [istanbul.geojson](istanbul.geojson).

- **Internet Speed:** Please use [Speedtest](https://www.speedtest.net) to test the speed and performance of the internet connection.
- **Schema:**
    - **Properties:**  "Name", "Download Speed" and "Speedtest Link" are *required*. In addition to these, you can add any properties you want (such as "Comment", "Menu", etc.).
    - **Geometry:** "coordinates" and "type" are *required*. "coordinates" should be an array of longitude and latitude. "type" should be "Point".

    Example JSON schema:
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
