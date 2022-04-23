<template>
  <div class="marking">
    <div class="card">
      <n-card>
        <div class="title">阅卷</div>
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :bordered="false"
        />
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { DataTableColumns,NButton, useMessage } from 'naive-ui'
import { defineComponent,h } from 'vue'

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      data,
      columns: createColumns({
        play (row: Song) {
          message.info(`Play ${row.title}`)
        }
      }),
      pagination: false as const
    }
  }
})
</script>

<style scoped lang="css">
.n-card {
  width: 1239px;
  min-height: 584px;
  height: auto;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 20px;
  padding: 0;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  color: rgb(16, 16, 16);
  margin-bottom: 20px;
}
.row {
  display: flex;
  justify-content: space-around;
}
.user,
.mark,
.operation {
  border: 1px solid #e8e8e8;
  height: 78px;
  line-height: 78px;
}
.user {
  flex: 1;
  font-size: 24px;
  color: #101010;
  padding-left: 10px;
}
.mark {
  flex: 2;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.operation {
  flex: 0.5;
  text-align: center;
}
.objective-item {
  flex: 1;
}
.subjective-item {
  flex: 1;
}
.total {
  flex: 1;
}
</style>
