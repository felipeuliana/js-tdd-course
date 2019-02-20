import { expect } from 'chai';
import  { fizzBuzz } from '../src/main.js';

/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
Se não for múltiplo de nada, retorna o número
 */

describe('Smoke tests', function() {
  it('\'fizzBuzz\' should exist:', function () {
    expect(fizzBuzz).to.exist;
    expect(fizzBuzz).to.be.a.function;
  });
});

describe('FizzBuzz', function() {
  it('should return 0 when 0', function () {
    expect(fizzBuzz(0)).to.be.equal(0);
  });

  it('should return \'Fizz\' when multiple of 3', function () {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
    expect(fizzBuzz(9)).to.be.equal('Fizz');
  });

  it('should return \'Buzz\' when multiple of 5', function () {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
    expect(fizzBuzz(20)).to.be.equal('Buzz');
  });

  it('should return \'FizzBuzz\' when multiple of 3 and 5', function () {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(45)).to.be.equal('FizzBuzz');
  });

  it('should return own entry when not multiple of 3 and/or 5', function () {
    expect(fizzBuzz(1)).to.be.equal(1);
    expect(fizzBuzz(2)).to.be.equal(2);
    expect(fizzBuzz(7)).to.be.equal(7);
    expect(fizzBuzz(11)).to.be.equal(11);
  });
});
