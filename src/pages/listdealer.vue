<template>
  <div class="w-full h-full">
    <div class="">
      <!--header content-->
      <div class="h-[160px] max-w-full bg-gray-100 flex justify-start">
        <div class="pt-12 pl-10">
          <div
            class="h-[50px] flex items-center shadow-sm px-[10px] w-full py-[10px] border-b"
          >
            <h2 class="pt-20 text-3xl font-bold">Dealer</h2>
          </div>
        </div>
      </div>
    </div>

    <!--content-->
    <!-- Search input -->
    <div class="m-[2px] h-[calc(100vh-210px)] ml-5 px-4 mr-5 absolute top-40 right-5">
      <div class="flex min-w-full">
        <label for="inputSearch" class="sr-only">Cari.. </label>
        <input
          id="inputSearch"
          type="text"
          placeholder="Cari..."
          class="block w-64 py-2 pl-10 pr-4 text-sm border rounded-lg focus:border-cyan-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <span
          class="absolute transform -translate-y-1/2 pointer-events-none left-7 top-[20px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-cyan-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <!--tambah produk-->
        <div class="relative">
          <button
            class="inline-flex items-center justify-center bg-cyan-600 px-[10px] ml-8 h-[35px] rounded-lg text-white text-sm font-bold hover:bg-cyan-800"
            v-on:click.prevent="onTambahDealerClick"
          >
            Tambah Dealer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <!-- Table -->
    <dealertable :data="DataDealer"></dealertable>

  </div> 
  <!--main-->
</template>

<script>
import { computed } from "vue";
import dealertable from './components/dealertable.vue';


export default {
  components: { dealertable },
  data() {
    return {
      deletedNamaDealer: "",
      DataDealer: [
        {
          id: "1",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "2",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "3",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "4",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "5",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "6",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "7",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "7",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "8",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
        {
          id: "9",
          NamaDealer: "Smoot Concept Teknologi",
          Alamat:
            "Jl. Kesehatan Raya No.8, RW.6, South Petojo, Gambir, Central Jakarta City, Jakarta 10160",
          Kontak: "0822-9789-1050",
          LinkWebsite: "https://www.smoot.id/",
          LinkMaps: "https://maps.app.goo.gl/QjXgjCpb5xRF12RYA",
          Latitude: "-6.171446666683182",
          Longitude: "106.81462283067978",
          Merk: "Smooth",
          Aksi: "",
        },
      ],
    };
  },


  provide() {
    return {
      DataDealer: computed(() => this.DataDealer),
      deleteDealer: this.deleteDealer,
      saveDealer: this.saveDealer
    };
  },
  methods: {
    deleteDealer(deletedNamaDealer) {
      alert(deletedNamaDealer);
      this.deletedDealer = deletedNamaDealer;
    },
    deletingDealer() {
      this.DataDealer = this.DataDealer.filter(
        (data) => data.NamaDealer != this.deletedNamaDealer
      );
    },
    onTambahDealerClick() {
      this.$router.push({ path: "/tambahdealer" });
    },
  },
};
</script>

<style></style>
