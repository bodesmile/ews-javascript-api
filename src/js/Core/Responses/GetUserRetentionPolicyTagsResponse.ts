			
 class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
	RetentionPolicyTags: RetentionPolicyTag[];
	private retentionPolicyTags: RetentionPolicyTag[] /*System.Collections.Generic.List<RetentionPolicyTag>*/;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetUserRetentionPolicyTagsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			