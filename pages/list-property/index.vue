<template>
    <div>
         <div class="homepage-container">
            <div class="listing-wrapper pv4">
                <div class="ba b--light-gray br3">
                    <div class="flex flex-column pa4">
                        <div class="center pt4 pb3">
                            <img src="~/assets/images/short-stays.svg" class="profile-image" >
                        </div>  
                        <h3 class="fw7 dark  tc mv1">Etornam & sons</h3>
                        <h3 class="fw4 grey--6 tc mb2 f5">0200002345</h3>
                        <p class="lh-copy fw4 grey--5 tc mb2 pb3 f6">No 56, Numo Arkansas Close, Ahinsan, Kasoa, Accra, Ghana.</p>
                        <div class="pv4 bb bt b--light-gray">
                            <div class="flex mb2 justify-between">
                                <span class="fw7 grey--5 lh-copy">Total lisitings</span>
                                <span class="grey--6 lh-copy normal">0</span>
                            </div>
                            <div class="flex mb2 justify-between">
                                <span class="fw7 grey--5 lh-copy">Email</span>
                                <span class="grey--6 lh-copy normal">etornamsons@gmail.com</span>
                            </div>
                            <div class="flex mb2 justify-between">
                                <span class="fw7 grey--5 lh-copy">Member Since</span>
                                <span class="grey--6 lh-copy normal">18 January 2012</span>
                            </div>
                        </div>
                        <div class="pv4 bb b--light-gray">
                            <p class="f3 fw7 dark mb2">4.5 <span class="f6 grey--5 fw5">/5.0</span></p>
                            <p class="f6 dark mb2">based on 120 reviews</p>
                        </div>
                        <div class="pv4 bb b--light-gray">
                            <h4 class="f6 grey--5 mb2">About</h4> 
                            <p class="f6 grey--5 lh-copy normal mb2">We have thousands of villas, apartments and townhouses for sale. Search through verified, hand-selected properties in Accra. Sign Up Online. Verified Properties. Manage Viewings. Highlights: No Extra Cost, Chat Option Available, Virtual Tours Available.</p>
                        </div>
                        <div class="pv4 tc">
                            <nuxt-link to="/list-property" class="btn btn--green">Edit Profile Information</nuxt-link>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h2 class="dark fw7 pb3 bb b--light-gray f4">Listings</h2>
                    <div class="flex flex-column pv7">
                        <div>
                            <p class="lh-copy grey--5 fw7 f5 mb1 tc">You have not created a listing yet</p>
                        </div>
                        
                        <div class="pv2 tc">
                            <nuxt-link to="/list-property/create" class="btn btn--green ">Add new listing</nuxt-link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer :is-background="true"/>
    </div>
    
</template>
<script>
export default {
    name: 'Listing',
    data(){
        return {

        }
    }
}
</script>
<style >
  /* .listing-wrapper{
    display: grid;
    grid-template-columns: fit-content(20ch) minmax(min(50vw , 30ch) , 1fr);
    grid-gap: 2rem;
  } */
  .listing-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.listing-wrapper > :first-child {
  flex-basis: 25rem; 
  flex-grow: 1;
}

.listing-wrapper > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
}

.profile-image{
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
}
</style>