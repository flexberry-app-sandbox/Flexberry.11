﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Бригада.
    /// </summary>
    // *** Start programmer edit section *** (Бригада CustomAttributes)

    // *** End programmer edit section *** (Бригада CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Бригада : ICSSoft.STORMNET.DataObject
    {
        
        private string fКод;
        
        private System.DateTime fДатаНачалаБригады;
        
        private System.DateTime fДатаРаспадаБригады;
        
        // *** Start programmer edit section *** (Бригада CustomMembers)

        // *** End programmer edit section *** (Бригада CustomMembers)

        
        /// <summary>
        /// ДатаНачалаБригады.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.ДатаНачалаБригады CustomAttributes)

        // *** End programmer edit section *** (Бригада.ДатаНачалаБригады CustomAttributes)
        public virtual System.DateTime ДатаНачалаБригады
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.ДатаНачалаБригады Get start)

                // *** End programmer edit section *** (Бригада.ДатаНачалаБригады Get start)
                System.DateTime result = this.fДатаНачалаБригады;
                // *** Start programmer edit section *** (Бригада.ДатаНачалаБригады Get end)

                // *** End programmer edit section *** (Бригада.ДатаНачалаБригады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.ДатаНачалаБригады Set start)

                // *** End programmer edit section *** (Бригада.ДатаНачалаБригады Set start)
                this.fДатаНачалаБригады = value;
                // *** Start programmer edit section *** (Бригада.ДатаНачалаБригады Set end)

                // *** End programmer edit section *** (Бригада.ДатаНачалаБригады Set end)
            }
        }
        
        /// <summary>
        /// ДатаРаспадаБригады.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.ДатаРаспадаБригады CustomAttributes)

        // *** End programmer edit section *** (Бригада.ДатаРаспадаБригады CustomAttributes)
        public virtual System.DateTime ДатаРаспадаБригады
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.ДатаРаспадаБригады Get start)

                // *** End programmer edit section *** (Бригада.ДатаРаспадаБригады Get start)
                System.DateTime result = this.fДатаРаспадаБригады;
                // *** Start programmer edit section *** (Бригада.ДатаРаспадаБригады Get end)

                // *** End programmer edit section *** (Бригада.ДатаРаспадаБригады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.ДатаРаспадаБригады Set start)

                // *** End programmer edit section *** (Бригада.ДатаРаспадаБригады Set start)
                this.fДатаРаспадаБригады = value;
                // *** Start programmer edit section *** (Бригада.ДатаРаспадаБригады Set end)

                // *** End programmer edit section *** (Бригада.ДатаРаспадаБригады Set end)
            }
        }
        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.Код CustomAttributes)

        // *** End programmer edit section *** (Бригада.Код CustomAttributes)
        [StrLen(255)]
        public virtual string Код
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.Код Get start)

                // *** End programmer edit section *** (Бригада.Код Get start)
                string result = this.fКод;
                // *** Start programmer edit section *** (Бригада.Код Get end)

                // *** End programmer edit section *** (Бригада.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.Код Set start)

                // *** End programmer edit section *** (Бригада.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Бригада.Код Set end)

                // *** End programmer edit section *** (Бригада.Код Set end)
            }
        }
    }
}
