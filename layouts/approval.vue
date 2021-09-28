<template>
    <div class="flex flex-wrap">
        <div class="g-bar dn-xs"></div>
        <div class="wrapper">
            <Header />
            <div>
                <Nuxt />
            </div>
        </div>
    </div>
</template>
<style >
 .g-bar{
    /* padding: 2.5rem; */
    background-color:#07a287 ;
    width: 2rem;
    min-height: 100vh;
 }

 .wrapper{
     flex: 1;
 }

</style>