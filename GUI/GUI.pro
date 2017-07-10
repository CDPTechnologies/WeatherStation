TYPE = guiapplication
PROJECTNAME = GUI

DEPS += \
    cdplogger

HEADERS += Libraries.h
SOURCES += CDPMain.cpp

OTHER_FILES += \
    Application/mainwidget.ui \
    Application/qt.conf

DISTFILES += \
    $$files(*.xml, true) \
    $$files(*.lic, true) \
    $$files(Application/www/*.*, true)

load(cdp)
