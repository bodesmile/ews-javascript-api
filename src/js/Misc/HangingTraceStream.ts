			
 class HangingTraceStream extends System.IO.Stream {
	CanRead: boolean;
	CanSeek: boolean;
	CanWrite: boolean;
	Length: number;
	Position: number;
	private underlyingStream: any /*System.IO.Stream*/;
	private service: ExchangeService;
	private responseCopy: any /*System.IO.MemoryStream*/;
	Flush(): void{ throw new Error("Not implemented.");}
	Read(buffer: any /*System.Byte[]*/, offset: number, count: number): number{ throw new Error("Not implemented.");}
	Seek(offset: number, origin: any /*System.IO.SeekOrigin*/): number{ throw new Error("Not implemented.");}
	SetLength(value: number): void{ throw new Error("Not implemented.");}
	SetResponseCopy(responseCopy: any /*System.IO.MemoryStream*/): void{ throw new Error("Not implemented.");}
	Write(buffer: any /*System.Byte[]*/, offset: number, count: number): void{ throw new Error("Not implemented.");}
}
export = HangingTraceStream;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			