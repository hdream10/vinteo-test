// Что было плохо и почему:
// Условие `if` содержит сложную логику, которую сложно сразу понять.

// Что стало лучше и почему:
// Вынесена логика условия в выражение, что улучшает читаемость и понимание.

const isNonRecurrentExpiredTimer = timer.hasExpired() && !timer.isRecurrent();

if (isNonRecurrentExpiredTimer) {
}
