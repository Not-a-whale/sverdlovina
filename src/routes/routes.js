import Main from "../components/Main.vue";
import Services from "../components/Services.vue";
import Service from "../components/Service.vue";
import Gallery from "../components/Gallery.vue";
import Blog from "../components/Blog.vue";
import Contacts from "../components/Contacts.vue";
import Drilling from "../components/Services/Drilling.vue";
import WaterDrilling from "../components/Services/WatterDrilling.vue";
import PillarsOfTheEarth from "../components/Services/PillarsOfTheEarth.vue";
import HydroEcoDrilling from "../components/Services/HydroEcoDrilling.vue";
import GeoFinding from "../components/Services/GeoFinding.vue";
import IndustrialLowering from "../components/Services/IndustrialLowering.vue";
import ElectroChemoProtect from "../components/Services/ElectroChemoProtect.vue";
import Plugging from "../components/Services/Plugging.vue";

export const routes = [
  { path: "/", component: Main },
  { path: "/services", component: Services },
  { path: "/drilling", component: Drilling },
  { path: "/water-drilling", component: WaterDrilling },
  { path: "/pillars-of-the-earth", component: PillarsOfTheEarth },
  { path: "/hydro-eco-drill", component: HydroEcoDrilling },
  { path: "/geo-find", component: GeoFinding },
  { path: "/industrial-lowering", component: IndustrialLowering },
  { path: "/electro-chemo-protect", component: ElectroChemoProtect },
  { path: "/plugging", component: Plugging },
  /*   {
    path: "/service",
    component: Service,
    children: [],
  }, */
  { path: "/gallery", component: Gallery },
  { path: "/blog", component: Blog },
  { path: "/contacts", component: Contacts },
];
