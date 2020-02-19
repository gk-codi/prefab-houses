BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Image" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"IDproduct"	INTEGER NOT NULL,
	"Image"	TEXT [50],
	"Price"	INTEGER
);
CREATE TABLE IF NOT EXISTS "Color" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"type"	TEXT [50],
	"color"	TEXT [10]
);
CREATE TABLE IF NOT EXISTS "Product" (
	"IDproduct"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"TypeName"	TEXT [50]
);
CREATE TABLE IF NOT EXISTS "Subscribe" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"Location"	TEXT [50] NOT NULL,
	"Email"	TEXT [50] NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS "Admin" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"UserName"	TEXT [50] NOT NULL UNIQUE,
	"UserPassword"	TEXT [50] NOT NULL
);
INSERT INTO "Image" VALUES (1,4,'imageA',100);
INSERT INTO "Image" VALUES (2,2,'imageB',200);
INSERT INTO "Image" VALUES (3,1,'imageC',300);
INSERT INTO "Image" VALUES (4,3,'imageD',400);
INSERT INTO "Image" VALUES (5,2,'imageE',500);
INSERT INTO "Image" VALUES (6,4,'imageF',600);
INSERT INTO "Image" VALUES (7,1,'imageG',700);
INSERT INTO "Color" VALUES (1,'navbar','white');
INSERT INTO "Color" VALUES (3,'footer','darkblue');
INSERT INTO "Color" VALUES (4,'text','red');
INSERT INTO "Product" VALUES (1,'Kit Houses');
INSERT INTO "Product" VALUES (2,'Modular');
INSERT INTO "Product" VALUES (3,'Panelized');
INSERT INTO "Product" VALUES (4,'SIP');
INSERT INTO "Subscribe" VALUES (1,'ero','ali@gmail.com');
INSERT INTO "Subscribe" VALUES (4,'dubai','jad123@gmail.com');
INSERT INTO "Subscribe" VALUES (6,'heeee','test');
INSERT INTO "Subscribe" VALUES (8,'leb','hello');
INSERT INTO "Subscribe" VALUES (10,'amer','yszbdjk');
INSERT INTO "Subscribe" VALUES (11,'amer','tsbscom');
INSERT INTO "Admin" VALUES (1,'Admin-1','admin1');
INSERT INTO "Admin" VALUES (2,'Admin-2','admin2');
INSERT INTO "Admin" VALUES (3,'Admin-3','helloov');
COMMIT;
