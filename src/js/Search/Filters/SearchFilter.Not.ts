			
 class Not extends SearchFilter {
	SearchFilter: SearchFilter;
	private searchFilter: SearchFilter;
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	SearchFilterChanged(complexProperty: ComplexProperty): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = Not;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------


			