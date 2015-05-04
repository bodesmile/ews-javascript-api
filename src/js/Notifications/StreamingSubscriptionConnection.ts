			
 class StreamingSubscriptionConnection {
	CurrentSubscriptions: StreamingSubscription[] /*System.Collections.Generic.IEnumerable<StreamingSubscription>*/;
	IsOpen: boolean;
	private subscriptions: any /*System.Collections.Generic.Dictionary<string, StreamingSubscription>*/;
	private connectionTimeout: number;
	private session: ExchangeService;
	private isDisposed: boolean;
	private currentHangingRequest: GetStreamingEventsRequest;
	private lockObject: any;
	private OnNotificationEvent: NotificationEventDelegate;
	private OnSubscriptionError: SubscriptionErrorDelegate;
	private OnDisconnect: SubscriptionErrorDelegate;
	AddSubscription(subscription: StreamingSubscription): void{ throw new Error("Not implemented.");}
	Close(): void{ throw new Error("Not implemented.");}
	Dispose(): void{ throw new Error("Not implemented.");}
	//Dispose(suppressFinalizer: boolean): void{ throw new Error("Not implemented.");}
	Finalize(): void{ throw new Error("Not implemented.");}
	HandleServiceResponseObject(response: any): void{ throw new Error("Not implemented.");}
	InternalOnDisconnect(ex: Exception): void{ throw new Error("Not implemented.");}
	IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): void{ throw new Error("Not implemented.");}
	IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): void{ throw new Error("Not implemented.");}
	IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): void{ throw new Error("Not implemented.");}
	OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): void{ throw new Error("Not implemented.");}
	Open(): void{ throw new Error("Not implemented.");}
	RemoveSubscription(subscription: StreamingSubscription): void{ throw new Error("Not implemented.");}
	ThrowIfDisposed(): void{ throw new Error("Not implemented.");}
	ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): void{ throw new Error("Not implemented.");}
}
export = StreamingSubscriptionConnection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			