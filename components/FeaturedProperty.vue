<template>
    <div> 
        <div class="bb b--light-gray pb3">
        <ul class="flex property-nav justify-center">
            <li :class="[ title === 'residential' ? 'active' : '']"><a @click="title='residential'">Residential property</a></li>
            <li :class="[ title === 'commercial' ? 'active' : '']"><a @click="title='commercial'">Commercial property</a></li>
            <li :class="[ title === 'industrial' ? 'active' : '']"><a @click="title='industrial'">Industrial property</a></li>
        </ul>
        
    </div>
    <div class="pv3">
        <div v-if="title === 'residential'">
            <div class="flex">

                <div v-for="residence in residential" :key="residence.title" class="flex flex-column">
                    <div class="pv3">
                        <img :src="require(`~/assets/images/${residence.image}`)" alt="" srcset="">
                    </div>
                    <h3 class="dark fs-normal fw7 pv3">{{residence.title}}</h3>
                    <ul class="flex featured-prop-ul">
                        <li><p>{{residence.location}}</p></li>
                        <li v-for="(utility , key) in residence.utilities" :key="key">
                            <p>{{ utility }} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="title === 'commercial'">
            <p>Commercial</p>
        </div>
        <div v-if="title === 'industrial'">
            <p>Industrial</p>
        </div>
    </div>

    </div>
    
    
</template>
<script>
export default {
    data () {
        return {
           title: 'residential',
           residential: [
               {
                   image: 'apartment.svg',
                   location: 'Achimota',
                   price: 6000,
                   title: 'A mini self contain apartment',
                   utilities: ['1 bedroom' , '1 bathroom']
               }
           ]
        }
    },
    methods: {

    }
}
</script>
<style lang="css">
   .property-nav{
       padding:0;
       list-style: none;
   }

   .property-nav > li{
       padding: 0 1rem;
   }

   .property-nav > li > a{
       text-decoration: none;
       color: var(--grey--4);
       font-weight: 500;
       font-style: normal;
       font-size: 1rem;
       cursor:pointer;
   }

   .property-nav > li.active > a{
    color: var(--green);
    font-weight: 700;
    padding-bottom: 1rem;
    border-bottom: 4px solid #07A287;
   }  

   .featured-prop-ul{
       padding: 0;
   }

    .featured-prop-ul  {
          list-style: none;
   }

   /* .featured-prop-ul > li:first-child {
          list-style: none;
   } */

   .featured-prop-ul > li:not(:first-child) {
       padding: 0 0.7rem;
   }
</style>