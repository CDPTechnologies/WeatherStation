CDPVERSION = 4.2
TYPE = system
load(cdp)

DISTFILES += $$files(*.xml, false)

SUBDIRS += \
    WeatherStationXApp \
    WeatherGUI \
    OutsideWeather
