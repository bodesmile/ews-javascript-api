			
 class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
	SmtpAddress: string;
	OofSettings: OofSettings;
	private smtpAddress: string;
	private oofSettings: OofSettings;
	Execute(): ServiceResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = SetUserOofSettingsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			