import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'amazonClone';
  brands = [
    {
      cardTitle: 'Up to 65% off | Home & kitchen',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_a_new_372x232_in-en._SY232_CB647055984_.jpg',
    },
    {
      cardTitle: 'Up to 55% off | TVs & appliances',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_b_372x232_in-en._SY232_CB647056395_.jpg',
    },
    {
      cardTitle: 'Up to 65% off | Daily essentials',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_c_372x232_in-en._SY232_CB647056391_.jpg',
    },
    {
      cardTitle: 'Minimum 65% off | Clothing & more',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_d_372x232_in-en._SY232_CB647056393_.jpg',
    },
  ];
  kitchen = [
    {
      cardTitle: 'kitchen & home appliances',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/JANART/OHLGW/DC4_2x._SY232_CB648644067_.jpg',
    },
    {
      cardTitle: 'Home & Decor',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/kitchen/kshrut/janart_kshrut/xcm_banners_2022_janart_qc-372x232-product-badge-yxb4b_372x232_in-en._SY232_CB648749456_.jpg',
    },
    {
      cardTitle: 'Cookware & dining',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/372x232_2._SY232_CB648692698_.jpg',
    },
    {
      cardTitle: 'Furniture & mattress',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-peslf_372x232_in-en._SY232_CB647097930_.jpg',
    },
  ];
  kitchen_2 = [
    {
      cardTitle: 'Cookware',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/372x232-1._SY232_CB647230943_.jpg',
    },
    {
      cardTitle: 'Storage jars & containers',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/372x232-4._SY232_CB647230943_.jpg',
    },
    {
      cardTitle: 'Choppers & more tools',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/372x232-3._SY232_CB647230943_.jpg',
    },
    {
      cardTitle: 'Gas stoves',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/372x232-2._SY232_CB647230943_.jpg',
    },
  ];
  fashion = [
    {
      cardTitle: 'Clothing | Under 599',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/JanART/PC-QC/PFF/pc-qcs_01-372-232._SY232_CB647145429_.jpg',
    },
    {
      cardTitle: 'Beauty | Under 499',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/JanART/PC-QC/PFF/pc-qcs_02-372-232._SY232_CB647145429_.jpg',
    },
    {
      cardTitle: 'Footwear | Under 499 ',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/JanART/PC-QC/PFF/pc-qcs_03-372-232._SY232_CB647145429_.jpg',
    },
    {
      cardTitle: 'Backpacks, luggage & more | Under 599',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/JanART/PC-QC/PFF/pc-qcs_04-372-232._SY232_CB647145429_.jpg',
    },
  ];
  shoes = [
    {
      cardTitle: "Men's Footwear",
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/PCQCShoes/LOW-RES__2_mens_footwear._SY116_CB647124303_.jpg',
    },
    {
      cardTitle: "Women's Footwear",
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/PCQCShoes/LOW-RES__3womens_footwear._SY116_CB647124303_.jpg',
    },
    {
      cardTitle: "Kid's Footwear",
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/PCQCShoes/LOW-RES__4_kids_footwear._SY116_CB647124303_.jpg',
    },
    {
      cardTitle: "Deal's on Footwear",
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/PCQCShoes/LOW-RES__1_deals_footwear._SY116_CB647124303_.jpg',
    },
  ];
  HouseholdSupplies = [
    {
      cardTitle: 'Laundary Care',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/JanART/GW/QC/HHS-1-186x116._SY116_CB648854828_.jpg',
    },
    {
      cardTitle: 'Household Cleaners',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/JanART/GW/QC/HHS-2-186x116._SY116_CB648854828_.jpg',
    },
    {
      cardTitle: 'Tissues & garbage bags',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/JanART/GW/QC/HHS-3-186x116._SY116_CB648854828_.jpg',
    },
    {
      cardTitle: 'Combo Packs',
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/JanART/GW/QC/HHS-4-186x116._SY116_CB648854828_.jpg',
    },
  ];
  Furniture=[
    {
      cardTitle:"Up to 70% off | Office chairs & study desks",
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-peslf_186x116_in-en._SY116_CB647097930_.jpg"
    },
    {
      cardTitle:"Up to 60% off | Sofas & recliners",
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-4ndw1_186x116_in-en._SY116_CB647097971_.jpg"
    },
    {
      cardTitle:"Up to 60% off | Beds & mattresses",
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-oxlcz_186x116_in-en._SY116_CB647097928_.jpg"
    },
    {
      cardTitle:"Up to 70% off | Explore more furniture",
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-0n17c_186x116_in-en._SY116_CB647097930_.jpg"
    },
  ]
  Home=[
    {
      cardTitle:'Carpets & doormats',
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_1x_posy._SY116_CB647373111_.jpg"
    },
    {
      cardTitle:'Bed linen',
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/2_1x_unho._SY116_CB647373111_.jpg"
    },
    {
      cardTitle:'Living room furniture',
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/3_1x_plai._SY116_CB647373111_.jpg"
    },
    {
      cardTitle:'Cushion covers',
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/4_1x_kmnk._SY116_CB647373111_.jpg"
    }
  ]
}
