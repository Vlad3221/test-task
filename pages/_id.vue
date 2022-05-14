<template>
  <section>
    <div class="container">
      <h1>Тестовое задание - Таблица комментариев</h1>
      <div class="messages-table-back">
        <div class="message-table">
          <div class="message-table--header">
            <ul>
              <li>id</li>
              <li>name</li>
              <li>email</li>
            </ul>
          </div>
          <div class="container-table">
            <div class="boost-component-messages" v-for="(datas, k) in messages" :key="k">
              <nuxt-link :to="'/content/' + datas.id">
                <ul>
                  <li>{{datas.id}}</li>
                  <li>{{datas.name}}</li>
                  <li>{{datas.email}}</li>
                </ul>
              </nuxt-link>
            </div>
            
          </div>
          <div class="pagination">
            <button class="prev" :disabled="disablePrev" @click="goPrev()">prev</button>
            <button >{{$route.params.id}}</button>
            <button class="next" :disabled="disableNext" @click="goNext()">next</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>