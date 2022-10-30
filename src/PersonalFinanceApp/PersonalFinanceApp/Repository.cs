using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalFinanceApp
{
    interface IRepository
    {
         void SaveBill(Bill bill);
    }
    class SqlRepository : IRepository
    {
        public void SaveBill(Bill bill)
        {
            throw new NotImplementedException();
        }
    }
}
