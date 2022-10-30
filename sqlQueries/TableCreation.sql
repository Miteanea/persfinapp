USE persfinapp
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- Data Tables
	CREATE TABLE [Bills](
		[Id] [int] not null, -- pk

		[Date] [Date] NOT NULL,
		[Sum] [int] NOT NULL,

		[VendorId] [int] NOT NULL,  -- fk
		[CurrencyId] [int] NOT NULL,  -- fk
	) ON [PRIMARY]
	GO

	CREATE TABLE [Expenses](
		[Id] [int] NOT NULL, -- pk

		[Name] [nvarchar](MAX) NOT NULL,	
		[Quantity] [float] NOT NULL,
		[Price] [float] NOT NULL,	

		[BillId] [int] NOT NULL, -- fk
		[ItemUnitId] [nvarchar](MAX) NOT NULL, -- fk
		[ItemTypeId] [nvarchar](MAX) NOT NULL, -- fk
		[CategoryId] [int] NOT NULL	-- fk
	) ON [PRIMARY]
	GO

	CREATE TABLE [Income](
		[Id] [int] NOT NULL, -- pk

		[Date] [nvarchar](MAX) NOT NULL,
		[Source] [nvarchar](MAX) NOT NULL,
		[Description] [nvarchar](MAX) NOT NULL,
		[Sum] [float] NOT NULL,

		[CurrencyId] [int] NOT NULL, -- fk
	) ON [PRIMARY]
	GO

	CREATE TABLE [Savings](
		[Id] [int] NOT NULL, -- pk

		[Date] [nvarchar](MAX) NOT NULL,
		[Description] [nvarchar](MAX) NOT NULL,
		[Explanation] [nvarchar](MAX) NOT NULL,
		[Amnount] [float] NOT NULL,

		[Direction] [nvarchar](MAX) NOT NULL -- Out/In
	) ON [PRIMARY]
	GO

-- Lookup Tables

	CREATE TABLE [ExpenseCategories](
		[Id] [int] NOT NULL, -- pk
		[Name] [nvarchar](MAX) NOT NULL
		) ON [PRIMARY]
	GO

	CREATE TABLE [ItemUnit](
		[Id] [int] NOT NULL, -- pk
		[Name] [nvarchar](MAX) NOT NULL
		) ON [PRIMARY]
	GO

	CREATE TABLE [ItemType](
		[Id] [int] NOT NULL, -- pk
		[Name] [nvarchar](MAX) NOT NULL
		) ON [PRIMARY]
	GO

	CREATE TABLE [Vendor](
		[Id] [int] NOT NULL, -- pk
		[Name] [nvarchar](MAX) NOT NULL
		) ON [PRIMARY]
	GO

	CREATE TABLE [Currencies](
		[Id] [int] NOT NULL, -- pk
		[Name] [nvarchar](MAX) NOT NULL
		) ON [PRIMARY]
	GO

