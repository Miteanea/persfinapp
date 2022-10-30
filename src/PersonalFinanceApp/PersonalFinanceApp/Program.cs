using System;

namespace PersonalFinanceApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var app = new Logic(new UserInputTaker(), new SqlRepository());

            app.ReadBills();
        }
    }
}
