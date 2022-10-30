namespace PersonalFinanceApp.Models
{
    public class Expense
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public double Quantity { get; set; }
        
        public int CategoryId { get; set; }
        public string SubCategoryId { get; set; }
    }
}