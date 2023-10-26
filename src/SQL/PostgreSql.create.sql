




CREATE TABLE СоставБригады (
 primaryKey UUID NOT NULL,
 Сотрудник_m0 UUID NULL,
 Сотрудник_m1 UUID NULL,
 Сотрудник_m2 UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Бригада (
 primaryKey UUID NOT NULL,
 Код VARCHAR(255) NULL,
 ДатаНачалаБригады TIMESTAMP(3) NULL,
 ДатаРаспадаБригады TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 номер INT NULL,
 отчетство VARCHAR(255) NULL,
 имя VARCHAR(255) NULL,
 фамилия VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтсутствиеСотрудника (
 primaryKey UUID NOT NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 Причина VARCHAR(8) NULL,
 Сотрудник_m0 UUID NULL,
 Сотрудник_m1 UUID NULL,
 Сотрудник_m2 UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикРаботыСотрудника (
 primaryKey UUID NOT NULL,
 времяНачала TIMESTAMP(3) NULL,
 числоЧасов DOUBLE PRECISION NULL,
 времяОкончания TIMESTAMP(3) NULL,
 Время TIMESTAMP(3) NULL,
 ТабельСмены UUID NOT NULL,
 Сотрудник_m0 UUID NULL,
 Сотрудник_m1 UUID NULL,
 Сотрудник_m2 UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Бригадир (
 primaryKey UUID NOT NULL,
 номер INT NULL,
 отчетство VARCHAR(255) NULL,
 имя VARCHAR(255) NULL,
 фамилия VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 код VARCHAR(255) NULL,
 наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Работник (
 primaryKey UUID NOT NULL,
 номер INT NULL,
 отчетство VARCHAR(255) NULL,
 имя VARCHAR(255) NULL,
 фамилия VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE СоставБригады ADD CONSTRAINT FK9a411aad93ba78492ee5ce274456a6d0fd58c3a6 FOREIGN KEY (Сотрудник_m0) REFERENCES Бригадир; 
CREATE INDEX Index9a411aad93ba78492ee5ce274456a6d0fd58c3a6 on СоставБригады (Сотрудник_m0); 

 ALTER TABLE СоставБригады ADD CONSTRAINT FK00f0f8eac56c15fff54e00f328006d992a227bbd FOREIGN KEY (Сотрудник_m1) REFERENCES Работник; 
CREATE INDEX Index00f0f8eac56c15fff54e00f328006d992a227bbd on СоставБригады (Сотрудник_m1); 

 ALTER TABLE СоставБригады ADD CONSTRAINT FK7d9ef759f163af8a830f071cd0bb7093b8bed49e FOREIGN KEY (Сотрудник_m2) REFERENCES Сотрудник; 
CREATE INDEX Index7d9ef759f163af8a830f071cd0bb7093b8bed49e on СоставБригады (Сотрудник_m2); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE ОтсутствиеСотрудника ADD CONSTRAINT FK3875e06b1a0b668a387e49b25268e3a1df4a625f FOREIGN KEY (Сотрудник_m0) REFERENCES Бригадир; 
CREATE INDEX Index3875e06b1a0b668a387e49b25268e3a1df4a625f on ОтсутствиеСотрудника (Сотрудник_m0); 

 ALTER TABLE ОтсутствиеСотрудника ADD CONSTRAINT FKab4d954e4f510e612293fcbb34dc293b7ce105f5 FOREIGN KEY (Сотрудник_m1) REFERENCES Работник; 
CREATE INDEX Indexab4d954e4f510e612293fcbb34dc293b7ce105f5 on ОтсутствиеСотрудника (Сотрудник_m1); 

 ALTER TABLE ОтсутствиеСотрудника ADD CONSTRAINT FK313ac5351c891c62a305574c9dc1cbde220ffaa1 FOREIGN KEY (Сотрудник_m2) REFERENCES Сотрудник; 
CREATE INDEX Index313ac5351c891c62a305574c9dc1cbde220ffaa1 on ОтсутствиеСотрудника (Сотрудник_m2); 
CREATE INDEX Index94411ed775dbab11b204cc07031c7641f14dd5a7 on ГрафикРаботыСотрудника (ТабельСмены); 

 ALTER TABLE ГрафикРаботыСотрудника ADD CONSTRAINT FKb012a8cc5192db5ace75074ba37c0e9b6d8835a4 FOREIGN KEY (Сотрудник_m0) REFERENCES Бригадир; 
CREATE INDEX Indexb012a8cc5192db5ace75074ba37c0e9b6d8835a4 on ГрафикРаботыСотрудника (Сотрудник_m0); 

 ALTER TABLE ГрафикРаботыСотрудника ADD CONSTRAINT FK161ed3a27c71327f565370c2ec48444b896d6c3f FOREIGN KEY (Сотрудник_m1) REFERENCES Работник; 
CREATE INDEX Index161ed3a27c71327f565370c2ec48444b896d6c3f on ГрафикРаботыСотрудника (Сотрудник_m1); 

 ALTER TABLE ГрафикРаботыСотрудника ADD CONSTRAINT FK98757c9687742e289cc7cd26259d2e6ed1d6c5f2 FOREIGN KEY (Сотрудник_m2) REFERENCES Сотрудник; 
CREATE INDEX Index98757c9687742e289cc7cd26259d2e6ed1d6c5f2 on ГрафикРаботыСотрудника (Сотрудник_m2); 

 ALTER TABLE Бригадир ADD CONSTRAINT FK83a62e036b7efe95145781817f125d04efb1fb2d FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index83a62e036b7efe95145781817f125d04efb1fb2d on Бригадир (Должности); 

 ALTER TABLE Работник ADD CONSTRAINT FK71ed90969fecfab6d19bdd09704d4fef867602c9 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index71ed90969fecfab6d19bdd09704d4fef867602c9 on Работник (Должности); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

