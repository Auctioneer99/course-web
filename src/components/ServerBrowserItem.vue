<template>
<tr>
  <th>{{data.ID}}</th><td>{{data.Name}}</td><td>{{data.Mode}}</td><td>{{data.Players}}/{{data.Slots}}</td>
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
