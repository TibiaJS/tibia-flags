# tibia-flags
Generate or Parse Tibia Flags to use

## Supported Versions
* Tested only [TFS 1.0](https://github.com/otland/forgottenserver/)

## API
  * getFlagsByNumber(flag)
    * flag - required - Flags value
    * returns Array
  * getFlagByValue(value)
    * value - required - Flag value
    * returns Object or false if not found
  * getFlagByName(name)
    * name - required - Name of flag
    * returns Object or false if not found
  * getFlags(hexSign) - return all flags
    * return Array

## References

  * [otland/forgottenserver](https://github.com/otland/forgottenserver/blob/e20dba8cddf1a4b661b4bec57a7da3e4d35a87b5/src/const.h#L470-L509)
  * [comedinha/flags-calculator](https://github.com/comedinha/flags-calculator)

## Contributing
Please submit all issues and pull requests to the [TibiaJS/tibia-flags](https://github.com/TibiaJS/tibia-flags) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/TibiaJS/tibia-flags/issues).

## License

The MIT License (MIT)

Copyright (c) 2014 TibiaJS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
