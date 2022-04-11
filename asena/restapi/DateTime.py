import jdatetime
import pytz

localtz = pytz.timezone('Asia/Tehran')

def DateTime():
    Date = str(jdatetime.datetime.now(tz=localtz).strftime("%Y%m%d"))
    Time = str(jdatetime.datetime.now(tz=localtz).strftime("%H:00"))

    return Date, Time

def DetailTime():
    year = int(jdatetime.datetime.now(tz=localtz).strftime("%Y"))
    month = int(jdatetime.datetime.now(tz=localtz).strftime("%m"))
    day = int(jdatetime.datetime.now(tz=localtz).strftime("%d"))
    time = str(jdatetime.datetime.now(tz=localtz).strftime("%H:00"))  

    return year, month, day, time  



# A = {"A":[{"B":2},{"C",3}]}
# print(A["A"][0])