using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalFinanceApp
{
    class Bill
    {
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public string Currency { get; set; }
        public List<Expense> Expenses { get; set; }
    }

    class Expense
    {
        public string Name { get; set; }
        public decimal Quantity { get; set; }
        public decimal Price { get; set; }
        public Unit Unit { get; set; }
        public Category Category { get; set; }
        public string Type { get; set; }
    }

    enum Unit
    {
        Kg = 1,
        Lt,
        Unit
    }

    enum Category
    {
        Alcohol= 1,
        Auto,
        BabyStuff,
        Cafe,
        Clothing,
        Communications,
        Electronics,
        Entertainment,
        Food,
        HouseholdStuff,
        HousingAndUtilities,
        Investment,
        Legal,
        Medicine,
        Misc,
        PersonalHygiene,
        Snacks,
        Sports
    }
}
