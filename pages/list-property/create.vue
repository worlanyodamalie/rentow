<template>
    <div class="container">
         <div>
             <h2 class="fw7 fs-normal dark lh-copy">Add a new listing</h2>
             <div class="pv5">
                  <ul class="listing-multistep-ul flex flex-wrap">
                    <li class="active"><a ><span class="rounded-listing mr2"></span>Listing overview</a></li>
                    <li><a ><span class="rounded-listing mr2"></span>Description</a></li>
                    <li><a ><span class="rounded-listing mr2"></span>Add images</a></li>
                    <li><a ><span class="rounded-listing mr2"></span>Price details</a></li>
                  </ul>
                  <form class="listing-content">
                        <div class="flex flex-column center w-50-ns">
                            <h3 class="f5 dark lh-copy mb2">Listing title</h3>
                            <input type="text" class="mb4" placeholder="" name="" id="">
                            <h3 class="f5 dark lh-copy mb2">Listing open for</h3>
                            <div class="flex  flex-wrap justify-between list-radio mb4">
                                <div>
                                    <input type="radio" v-model="listtype" value="rent" name="listing-for" id="rent">
                                    <label for="rent">Rent</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="listtype" value="shortlet" name="listing-for" id="shortlet">
                                    <label for="shortlet">Shortlet</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="listtype" value="lease" name="listing-for" id="lease">
                                    <label for="lease">Lease</label>
                                </div>
                                
                            </div>
                            <h3 class="f5 dark lh-copy mb2">Listing address</h3>
                            <div class="flex flex-wrap justify-between mb4">
                                <div class="w-40-ns"> 
                                    <select class="w-100-ns"  v-model="regionselected">
                                      <option disabled value="">Select region</option>
                                      <option v-for="(item,key) in regionOptions"  :key="key">{{item}}</option>
                                    </select>
                                </div>
                                <div class="w-40-ns"> 
                                    <select class="w-100-ns"  v-model="cityselected">
                                      <option disabled value="">Select city</option>
                                      <option v-for="(item,key) in cityOptions"  :key="key">{{item}}</option>
                                    </select>
                                </div>
                                

                            </div>
                            <div class="mb4">
                                <textarea name="" id="" cols="30" rows="10" class="w-100" placeholder="Enter exact address"></textarea>
                            </div>

                            <div class="center">
                                <button class="btn btn--green">Proceed</button>
                            </div>

   
                            <!-- <button class="btn btn--grey">Back</button> -->
                        </div>
                  </form>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    name: 'Add Listing',
    data(){
        return {
            listtype: null,
            regionselected: '',
            cityselected: '',
            regionOptions: ['Greater Accra','Ashanti' ],
            cityOptions: ['Accra','Kumasi' , 'Weija' , 'Osu' , 'Labone' ]
            
        }
    }
}
</script>
<style >
  .rounded-listing{
      padding: 9px;
      border-radius: 50%;
      border: 1px solid #C3C7CE;
      display: inline-block;
      vertical-align: middle;
    }

    .listing-multistep-ul{
        list-style: none;
        border-top: 0.5px solid #E1E3E6;
        padding: 0;
    }

    .listing-content{
        border: 0.5px solid  #E1E3E6;
        padding:3rem;
    }

    .listing-multistep-ul > li{    
        padding: 1.2rem;
        flex: 1;
    }

    .listing-multistep-ul > li.active{
        background-color: #07A287;
    }

    .listing-multistep-ul > li.active > a{
        color: #ffffff;
    }

    .listing-multistep-ul > li > a{
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;
        color: #757D8A;
        text-align: center;
        display:block;
    }

    .list-radio  input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }

    .list-radio label{
        display: inline-block;
        background: #F8F8F8;        
        padding: 10px 30px;
        font-size: 1rem;
        border: 1px solid #E1E3E6;
        border-radius:8px;
        color: #757D8A;
        font-weight: 500;
        line-height: 24px;
        cursor:pointer;
        text-align:center;
        width:100%;
    }

    .list-radio input[type="radio"]:checked + label {
        background-color:#08b395;
        color:#ffffff;
      }

    .list-radio > div{
        flex: 0 0 30%;
    }


  
</style>