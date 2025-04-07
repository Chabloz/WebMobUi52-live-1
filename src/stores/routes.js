import { computed, ref } from 'vue';
import PageTemperature from '@/components/pages/PageTemperature.vue';
import PageByte from '@/components/pages/PageByte.vue';

export const routes = [
 {
  anchor: 'temp',
  label: 'Temperature',
  page: PageTemperature,
 },
 {
  anchor: 'byte',
  label: 'Byte & co',
  page: PageByte,
 },
 {
  anchor: 'test',
  label: 'test',
  page: PageTemperature,
 },
];

export const anchor = ref('temp');

export const currentPage = computed(() => {
  return routes.find((route) => route.anchor === anchor.value)?.page;
});