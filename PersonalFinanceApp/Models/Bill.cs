using System;
using System.Collections.Generic;

namespace PersonalFinanceApp.Models
{
    public class Bill
    {
        public int BillId { get; set; }  
        public DateTime Date { get; set; }
        public int StoreId { get; set; }
        public List<Expense> Expenses { get; set; } 
        public decimal Sum { get; set; }
    }
}