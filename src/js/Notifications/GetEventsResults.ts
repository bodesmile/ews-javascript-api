			
 class GetEventsResults {
	static XmlElementNameToEventTypeMap: any /*System.Collections.Generic.Dictionary<string, EventType>*/;
	SubscriptionId: string;
	PreviousWatermark: string;
	NewWatermark: string;
	MoreEventsAvailable: boolean;
	FolderEvents: FolderEvent[] /*System.Collections.Generic.IEnumerable<FolderEvent>*/;
	ItemEvents: ItemEvent[] /*System.Collections.Generic.IEnumerable<ItemEvent>*/;
	AllEvents: NotificationEvent[] /*System.Collections.ObjectModel.Collection<NotificationEvent>*/;
	private newWatermark: string;
	private subscriptionId: string;
	private previousWatermark: string;
	private moreEventsAvailable: boolean;
	private events: NotificationEvent[] /*System.Collections.ObjectModel.Collection<NotificationEvent>*/;
	private static xmlElementNameToEventTypeMap: any /*LazyMember<System.Collections.Generic.Dictionary<string, EventType>>*/;
	LoadEventsFromJson(jsonEventsArray: any[], service: ExchangeService): void{ throw new Error("Not implemented.");}
	LoadFromJson(eventsResponse: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType): void{ throw new Error("Not implemented.");}
}
export = GetEventsResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			