<template>
    <div class="m-3 mx-12 overflow-x-scroll bg-white">
      <table id="dealertable" class="min-w-full text-sm text-left whitespace-nowrap">
        <!-- Table headers -->
        <thead class="h-auto px-2 py-2 tracking-wider uppercase bg-blue-100">
          <tr>
            <th scope="col" class="px-6 py-4">No</th>
            <th scope="col" class="px-6 py-4">Nama Dealer</th>
            <th scope="col" class="px-6 py-4">Alamat</th>
            <th scope="col" class="px-6 py-4">Kontak</th>
            <th scope="col" class="px-6 py-4">Link Website</th>
            <th scope="col" class="px-6 py-4">Link Maps</th>
            <th scope="col" class="px-6 py-4">Latitude</th>
            <th scope="col" class="px-6 py-4">Longitude</th>
            <th scope="col" class="px-6 py-4">Merk</th>
            <th scope="col" class="px-6 py-4">Aksi</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <tr v-for="(dealer, index) in DataDealer" :key="dealer.NamaDealer">
            <th class="px-6 py-6 my-4 font-medium whitespace-nowrap">{{ index + 1 }}</th>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.NamaDealer }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.Alamat }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.Kontak }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.LinkWebsite }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.LinkMaps }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.Latitude }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.Longitude }}</td>
            <td class="px-6 py-4 my-4 whitespace-nowrap">{{ dealer.Merk }}</td>
            <div class="inline-flex pt-2 pl-4 my-4 ">
              <button @click.prevent="onEditDealerCLick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <span class="mx-2"></span>
              <button class="" @click="deletingDealer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
    <fwb-pagination class="mx-4 my-4" v-model="currentPage" :layout="'dealertable'" :per-page="9" :total-items="100" />
  </template>
  
  <script>
  export default {
    data() {
      return {
        itemsPerPage: 10,
        currentPage: 1,
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
      ],
      };
    },
    computed: {
      paginatedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.data.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
      },
    },
    methods: {
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      onEditDealerCLick() {
      this.$router.push({ path: "/editdealer" });
      return this.DataDealer
    },
    },
  };
  </script>
  