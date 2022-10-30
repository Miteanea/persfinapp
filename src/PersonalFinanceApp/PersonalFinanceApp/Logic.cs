using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalFinanceApp
{
    class Logic
    {
        public Logic(IUserInputTaker inputTaker, IRepository repo)
        {
            _inputTaker = inputTaker;
            _repo = repo;
        }

        private IUserInputTaker _inputTaker;
        private IRepository _repo;

        public void ReadBills()
        {
            Console.WriteLine("Input Bill? ");
            while (Console.ReadKey().Key == ConsoleKey.Enter)
            {
                Bill bill = _inputTaker.ReadBill();
                _repo.SaveBill(bill);
            }
        }
    }
}
