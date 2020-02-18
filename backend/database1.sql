BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Product" (
	"ID-Product"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"TypeName"	TEXT [50]
);
CREATE TABLE IF NOT EXISTS "Image" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"ID-Product"	INTEGER NOT NULL,
	"Image"	TEXT [50],
	"Price"	INTEGER
);
CREATE TABLE IF NOT EXISTS "Color" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"colorBackground"	TEXT [10],
	"colorText"	TEXT [10],
	"colorNav"	TEXT [20],
	"colorFooter"	TEXT [20]
);
CREATE TABLE IF NOT EXISTS "Admin" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"UserName"	TEXT [50] NOT NULL UNIQUE,
	"UserPassword"	TEXT [50] NOT NULL
);
CREATE TABLE IF NOT EXISTS "Subscribe" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"Location"	TEXT [50] NOT NULL,
	"Email"	TEXT [50] NOT NULL UNIQUE
);
INSERT INTO "Product" VALUES (1,'Kit Houses');
INSERT INTO "Product" VALUES (2,'Modular');
INSERT INTO "Product" VALUES (3,'Panelized');
INSERT INTO "Product" VALUES (4,'SIP');
INSERT INTO "Image" VALUES (1,4,'imageA',100);
INSERT INTO "Image" VALUES (2,2,'imageB',200);
INSERT INTO "Image" VALUES (3,1,'imageC',300);
INSERT INTO "Image" VALUES (4,3,'imageD',400);
INSERT INTO "Image" VALUES (5,2,'imageE',500);
INSERT INTO "Image" VALUES (6,4,'imageF',600);
INSERT INTO "Image" VALUES (7,1,'imageG',700);
INSERT INTO "Color" VALUES (1,'black','white','red','red');
INSERT INTO "Color" VALUES (2,'white','black','blue','blue');
INSERT INTO "Color" VALUES (3,'pink','darkblue','darkblue','darkblue');
INSERT INTO "Admin" VALUES (1,'Admin-1','admin1');
INSERT INTO "Admin" VALUES (2,'Admin-2','admin2');
INSERT INTO "Admin" VALUES (3,'Admin-3','admin3');
INSERT INTO "Subscribe" VALUES (1,'Beirut','ali@gmail.com');
INSERT INTO "Subscribe" VALUES (2,'Tripoli','ahmad@gmail.com');
INSERT INTO "Subscribe" VALUES (3,'West Bekaa','Jihad@gmail.com');
INSERT INTO "Subscribe" VALUES (4,'Jonieh','jad123@gmail.com');
INSERT INTO "Subscribe" VALUES (5,'saida','rita@gma.com');
COMMIT;
