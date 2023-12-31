package com.example.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.domain.Book;
import com.example.book.service.BookService;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class BookController {

    private final BookService bookService;

    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book) {
        return new ResponseEntity<>(bookService.save(book), HttpStatus.CREATED);
    }

    @GetMapping("/book")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book) {
        return new ResponseEntity<>(bookService.update(id, book), HttpStatus.OK);
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK);
    }
}
