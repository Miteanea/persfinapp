using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Text.Json;

namespace PersonalFinanceApp
{
    interface IUserInputTaker
    {
        Bill ReadBill();
    }
    class UserInputTaker : IUserInputTaker
    {
        public Bill ReadBill()
        {
            Bill bill = ReadBillDataMetadata();
            bill.Expenses = ReadExpenses();

            return bill;
        }

        private Bill ReadBillDataMetadata()
        {
            Bill bill = new Bill();
            StringBuilder sb = Utilities.GetStringBuilder();

            sb.Append("Date: ");
            Console.Write(sb);
            var date = DateTime.Now;
            sb.Append(date + "; ");
            bill.Date = date;

            bill.Location = ReadStringWithOutput(nameof(bill.Location), ref sb, Utilities.ReadString);

            sb.Append("Currency: EUR;");
            Console.Write(sb);
            bill.Currency = "EUR";

            return new Bill();
        }

        private T ReadStringWithOutput<T>(string propertyName, ref StringBuilder sb, Func<T> readFunc)
        {
            var emptyLine = "\r" + new string(' ', Console.WindowWidth -1) + "\r";
            sb.Append($"{propertyName} : ");
            Console.Write(emptyLine+ sb);
            T value = readFunc();
            sb.Append(value + "; ");
            Console.Write(emptyLine+ sb);

            return value;
        }

        private List<Expense> ReadExpenses()
        {
            List<Expense> expenses = new List<Expense>();
            bool hasEnded = false;

            Console.WriteLine("\r\n \t\t\t -= Enter Expenses =- \r\n");

            while (!hasEnded)
            {
                StringBuilder sb = Utilities.GetStringBuilder();
                Expense e = new Expense();

                e.Name = ReadStringWithOutput(nameof(e.Name), ref sb, Utilities.ReadString);

                e.Quantity = ReadStringWithOutput(nameof(e.Quantity), ref sb, Utilities.ReadNumber);

                e.Unit = ReadStringWithOutput(nameof(e.Unit), ref sb, Utilities.ReadUnit);

                e.Price =ReadStringWithOutput(nameof(e.Price), ref sb, Utilities.ReadNumber);

                expenses.Add(e);

                Console.Write("; Next?");
                if (Console.ReadKey().Key == ConsoleKey.Escape)
                {
                    hasEnded = true;
                }
                Console.WriteLine();
            }
            return expenses;
        }
    }
}
