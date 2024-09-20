export function file(idx) {
    return idx === 0
        ? 'PDF Files'
        : idx === 1
          ? 'AVI Files'
          : idx === 2
            ? 'PSD Files'
            : idx === 3
              ? 'ZIP Files'
              : idx === 4
                ? 'DLL Files'
                : 'EPS Files';
}
