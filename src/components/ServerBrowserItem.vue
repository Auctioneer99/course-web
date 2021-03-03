<template>
<tr>
  <th>{{data.ID}}</th><td>{{data.name}}</td><td>{{data.status}}</td><td>{{data.currentplayers}}/{{data.maxplayers}}</td><td>{{data.address}}</td>
</tr>
</template>

<script>
export default {
  name: 'ServerBrowserItem',
  props: {
    data: Object
  }
}
</script>
