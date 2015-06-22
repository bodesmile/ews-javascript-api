import {xml2JsObject, DOMParser, EwsLogging} from "../../src/js/ExchangeWebService";

var raw = '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="190" MinorBuildNumber="19" Version="V2_44" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/></s:Header><s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><GetUserAvailabilityResponse xmlns="http://schemas.microsoft.com/exchange/services/2006/messages"><FreeBusyResponseArray><FreeBusyResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><FreeBusyView><FreeBusyViewType xmlns="http://schemas.microsoft.com/exchange/services/2006/types">Detailed</FreeBusyViewType><WorkingHours xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><TimeZone><Bias>300</Bias><StandardTime><Bias>0</Bias><Time>02:00:00</Time><DayOrder>1</DayOrder><Month>11</Month><DayOfWeek>Sunday</DayOfWeek></StandardTime><DaylightTime><Bias>-60</Bias><Time>02:00:00</Time><DayOrder>2</DayOrder><Month>3</Month><DayOfWeek>Sunday</DayOfWeek></DaylightTime></TimeZone><WorkingPeriodArray><WorkingPeriod><DayOfWeek>Monday Tuesday Wednesday Thursday Friday</DayOfWeek><StartTimeInMinutes>480</StartTimeInMinutes><EndTimeInMinutes>1020</EndTimeInMinutes></WorkingPeriod></WorkingPeriodArray></WorkingHours></FreeBusyView></FreeBusyResponse><FreeBusyResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><FreeBusyView><FreeBusyViewType xmlns="http://schemas.microsoft.com/exchange/services/2006/types">FreeBusy</FreeBusyViewType><WorkingHours xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><TimeZone><Bias>480</Bias><StandardTime><Bias>0</Bias><Time>02:00:00</Time><DayOrder>1</DayOrder><Month>11</Month><DayOfWeek>Sunday</DayOfWeek></StandardTime><DaylightTime><Bias>-60</Bias><Time>02:00:00</Time><DayOrder>2</DayOrder><Month>3</Month><DayOfWeek>Sunday</DayOfWeek></DaylightTime></TimeZone><WorkingPeriodArray><WorkingPeriod><DayOfWeek>Monday Tuesday Wednesday Thursday Friday</DayOfWeek><StartTimeInMinutes>480</StartTimeInMinutes><EndTimeInMinutes>1020</EndTimeInMinutes></WorkingPeriod></WorkingPeriodArray></WorkingHours></FreeBusyView></FreeBusyResponse></FreeBusyResponseArray><SuggestionsResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><SuggestionDayResultArray><SuggestionDayResult xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><Date>2015-06-16T00:00:00</Date><DayQuality>Poor</DayQuality><SuggestionArray/></SuggestionDayResult></SuggestionDayResultArray></SuggestionsResponse></GetUserAvailabilityResponse></s:Body></s:Envelope>';


var dp = new DOMParser()
var domdata = dp.parseFromString(raw, "text/xml");
var xml2js = new xml2JsObject();
var objdata = xml2js.parseXMLNode(domdata.documentElement, true);

EwsLogging.DebugLog(objdata, true);