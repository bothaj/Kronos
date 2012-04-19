using System.Collections.Generic;
using Kronos.Models;

namespace Kronos.ViewModels
{
    public class ShoppingCartViewModel
    {
        MusicStoreEntities storeDB = new MusicStoreEntities();

        public List<Cart> CartItems { get; set; }
        public decimal CartTotal { get; set; }
    }
}