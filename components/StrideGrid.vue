<script setup lang="ts">
withDefaults(defineProps<{ mode?: 'definitions' | 'questions' }>(), {
  mode: 'definitions',
})

const categories = [
  {
    letter: 'S',
    title: 'Suplantación',
    definition: 'Usar una identidad ajena.',
    question: '¿Alguien puede actuar con una identidad ajena?',
  },
  {
    letter: 'T',
    title: 'Manipulación',
    definition: 'Alterar el importe o el destinatario de una transferencia.',
    question: '¿Alguien puede alterar una solicitud o un registro?',
  },
  {
    letter: 'R',
    title: 'Repudio',
    definition: 'Negar una acción sin evidencia trazable.',
    question: '¿Alguien puede negar una acción sin evidencia?',
  },
  {
    letter: 'I',
    title: 'Exposición de información',
    definition: 'Leer movimientos de otra cuenta.',
    question: '¿Alguien puede leer datos de otra cuenta?',
  },
  {
    letter: 'D',
    title: 'Denegación de servicio',
    definition: 'Impedir consultas legítimas.',
    question: '¿Alguien puede impedir el servicio legítimo?',
  },
  {
    letter: 'E',
    title: 'Elevación de privilegios',
    definition: 'Obtener permisos mayores a los asignados.',
    question: '¿Alguien puede obtener permisos de más?',
  },
]
</script>

<template>
  <div class="stride-grid" role="group" :aria-label="mode === 'questions' ? 'STRIDE como preguntas de revisión sobre la lista de amenazas' : 'STRIDE: seis tipos de amenaza'">
    <section v-for="category in categories" :key="category.letter" class="card-strong stride-card" :data-stride-letter="category.letter" :aria-label="category.title">
      <strong class="stride-letter">{{ category.letter }}</strong>
      <div>
        <strong class="stride-title">{{ category.title }}</strong>
        <p class="stride-description">{{ mode === 'questions' ? category.question : category.definition }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stride-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(144px, auto);
  gap: 12px;
  margin-top: 24px;
}

.stride-card {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  align-content: start;
  gap: 8px;
  padding: 16px;
  text-align: left;
}

.stride-letter {
  color: var(--slidev-theme-primary);
  font-size: 24px;
  line-height: 1;
}

.stride-title {
  display: block;
  font-size: 16px;
  line-height: 1.4;
}

.stride-description {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.5;
}
</style>
