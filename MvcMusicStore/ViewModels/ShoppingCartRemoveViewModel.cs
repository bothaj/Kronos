using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Kronos.Models;

namespace Kronos.ViewModels
{
    public class ShoppingCartRemoveViewModel
    {
        MusicStoreEntities storeDB = new MusicStoreEntities();

        public string Message { get; set; }
        public decimal CartTotal { get; set; }
        public int CartCount { get; set; }
        public int ItemCount { get; set; }
        public int DeleteId { get; set; }
    }
}