using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalFinanceApp
{
    class Utilities
    {
        public static string ReadString()
        {
            StringBuilder sb = new StringBuilder();
            ConsoleKeyInfo cki = new ConsoleKeyInfo();

            while (cki.Key != ConsoleKey.Enter)
            {
                cki = Console.ReadKey();
                if (cki.Key == ConsoleKey.Backspace)
                {
                    sb.Remove(sb.Length - 1, 1);
                    Console.Write("\x1B[1P");
                }
                else if (cki.Key != ConsoleKey.Enter)
                {
                    sb.Append(cki.KeyChar);
                }
            }

            return sb.ToString();
        }

        public static Unit ReadUnit()
        {
            Console.Write("(\"k\"-kg/\"l\"-Lt/\"\"-Unit)");
            switch (Console.ReadKey().KeyChar)
            {
                case 'k':
                    return Unit.Kg;
                case 'l':
                    return Unit.Lt;
                default:
                    return Unit.Unit;
            }
        }

        public static decimal ReadNumber()
        {
            decimal number;

            while (!decimal.TryParse(ReadString(), out number))
            {
                Console.Write("Wrong Input; Retry!");
            }

            return number;
        }

        public static StringBuilder GetStringBuilder()
        {
            return new StringBuilder("\r");
        }
    }
}
